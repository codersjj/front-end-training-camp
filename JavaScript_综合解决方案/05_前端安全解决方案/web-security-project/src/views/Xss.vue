<script setup>
import { ref } from 'vue'
import { getCommentList, commitComment } from '@/api/xss'
import DOMPurify from 'dompurify'

// 获取评论列表
const contentList = ref([])
const loadCommentList = async () => {
  const { list } = await getCommentList()
  contentList.value = list

  // contentList.value.unshift({ ...list[0], content: `<img style='position: fixed;left: 0;top: 0;width: 100vw;height: 100vh;z-index: 9999999;' src='https://res.lgdsunday.club/virus.jpg' onload='alert("此处会注入一段代码，即 xss 攻击。这段攻击会导致页面跳转至特定网站"); window.location.href="https://www.imooc.com"'/>` })
}
loadCommentList()

// 提交评论
const comment = ref('')
const handleCommit = async () => {
  // 处理输入内容
  // 阻止 html 注入
  // const htmlRegExp = /<[a-z][\s\S]*>/i
  // if (htmlRegExp.test(comment.value)) {
  //   alert('评论内容包含风险，请求被阻止')
  //   return
  // }

  const { data } = await commitComment(comment.value)
  contentList.value.unshift({ ...data, content: comment.value })
}
</script>

<template>
  <div class="xss">
    <div class="title">提交评论</div>
    <div class="comment-box">
      <textarea class="textarea" cols="30" rows="10" v-model="comment"></textarea>
      <button class="commit-btn" @click="handleCommit">提交</button>
    </div>
    <div class="title">评论列表</div>
    <ul class="content-list">
      <li class="content-item" v-for="item in contentList" :key="item.id">
        <div class="author">{{ item.author }}</div>
        <div
          class="content"
          v-html="
            DOMPurify.sanitize(item.content, {
              // 禁止标签
              FORBID_TAGS: ['style'],
              // 禁止标签上的属性
              FORBID_ATTR: ['style']
            })
          "
        >
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.xss {
  border-right: 1px solid #eee;
  padding: 0 38px 20px 0;
  width: 50%;

  .title {
    margin-bottom: 10px;
    font-size: 36px;
    font-weight: 700;
  }

  .comment-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;

    .commit-btn {
      align-self: flex-start;
      margin-top: 10px;
      width: 200px;
      height: 48px;
    }
  }
  .content-list {
    .content-item {
      border-bottom: 1px solid #333;
      padding: 20px 0;

      .author {
        margin-bottom: 10px;
        font-size: 28px;
        font-weight: bold;
        color: #da4f4f;
      }

      .content {
        font-size: 14px;
        line-height: 32px;
        color: #4c4c4c;
      }
    }
  }
}
</style>