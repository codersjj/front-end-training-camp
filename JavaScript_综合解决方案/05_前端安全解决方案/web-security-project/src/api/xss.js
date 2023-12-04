import request from "@/service";

/**
 * 获取评论列表
 * @returns 评论列表
 */
export function getCommentList() {
  return request.get('/xss/comment/list')
}

/**
 * 提交评论
 */
export function commitComment(comment) {
  return request.post('/xss/comment', {
    data: {
      content: comment
    }
  })
}