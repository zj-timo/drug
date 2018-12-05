
// 获取菜单
export const getMenus = (store,data) => {
  store.dispatch('GET_MENUS',data)
}

// 根据菜单定位tableFooter
export const menusTablePosition = (store,data) => {
  store.dispatch('MENUS_TABLE_POSITION',data)
}

