import { request } from "../request/request"

export function getConfigsByProductId() {
    return request({
      url: '/msdk/proxy/query_common_credit',
    })
  }


export function getHomeRecommend() {
  return request({
    url: '/home',
  })
}

export function getHomeConcern() {
  return request({
    url: '/concern',
  })
}

export function getLive() {
  return request({
    url: '/live',
  })
}

export function getUpgrade() {
  return request({
    url: '/upgrade',
  })
}

export function getModule() {
  return request({
    url: '/module',
  })
}

export function getBarinfo() {
  return request({
    url: '/barinfo',
  })
}

export function getChatinfo() {
  return request({
    url: '/chat',
  })
}

export function getChatname() {
  return request({
    url: '/chatname',
  })
}