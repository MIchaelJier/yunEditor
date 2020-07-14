const initButton = () => {
  const shortcode = document.querySelector('.ql-shortcode')
  const grammarlyInline = document.querySelector('.ql-grammarly-inline')
  shortcode.style.cssText =
    'width:80px; border:1px solid #ccc; border-radius:5px;'
  grammarlyInline.style.cssText =
    'width:120px; border:1px solid #ccc; border-radius:5px;'
  shortcode.innerText = '自定义命令'
  grammarlyInline.innerText = '插入分割线'
}

export default initButton