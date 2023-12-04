<script setup>
import { ref } from 'vue'
import { getCommentList, commitComment } from '@/api/xss'


// 获取评论列表
const contentList = ref([])
const loadCommentList = async () => {
  const { list } = await getCommentList()
  contentList.value = list
}
loadCommentList()

// 提交评论
const comment = ref('')
const handleCommit = async () => {
  const { data } = await commitComment(comment.value)
  contentList.value.unshift(data)
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
        <div class="content" v-html="item.content"></div>
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