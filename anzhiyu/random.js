var posts=["2024/10/08/hello-world/","2024/08/11/搭建博客的心得体会/","2024/09/12/搭建虚拟机的心得体会/","2024/10/08/node_modules/hexo-asset-img/README_zh/","2024/10/08/node_modules/hexo-asset-img/README/","2024/09/29/对c语言的初步认识/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };