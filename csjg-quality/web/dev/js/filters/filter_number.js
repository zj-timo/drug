/**
 * [过滤 ，只留合法数值]
 * @param  {[type]} index     [合法数值]
 */
export default  {
  write: val => {return val << 0},
  read: val => {return val}
}
