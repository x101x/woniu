function cloneShallow(source) {
  var target = {}
  for (var key in source){
      if(Object.prototype.hasOwnProperty.call(source,key)){
        target[key] = source[key]
      }
      
    }
    return target                    
  }
  function cloneDeep2(x) {
    const root = {}
  
    //栈
    const loopList = [
      {
        parent: root,
        key: undefined,
        data: x
      }
    ]
  
    while (loopList.length) {
      // 广度优先
      const node = loopList.pop()
      const parent = node.parent
      const key = node.key
      const data = node.data
  
      // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
      let res = parent
      if (typeof key !== 'undefined') {
        res = parent[key] = {}
      }
  
      for (let k in data) {
        if (data.hasOwnProperty(k)) {
          if (typeof data[k] === 'object') {
            // 下一次循环
            loopList.push({
              parent: res,
              key: k,
              data: data[k]
            })
          } else {
            res[k] = data[k]
          }
        }
      }
    }
    return root
  }
  