const postsData = [
    {
      id: 1,
      title: "Article",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://authorservices.taylorandfrancis.com/wp-content/uploads/2020/10/icon_draft_your_article.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue turpis ipsum. Donec eleifend mauris at eleifend mattis. Mauris eu elementum sem, ut ornare lacus. Phasellus vitae orci enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, ante et pretium feugiat, massa ipsum iaculis ante, sed consequat lectus purus id metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non malesuada ipsum. Ut et risus laoreet mauris tincidunt interdum eu at lectus. Mauris aliquam ligula ac faucibus pellentesque. Donec eget nulla vitae quam sodales semper. Sed id elit auctor, ultricies purus id, ornare odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum enim erat, dictum sed neque quis, imperdiet posuere sem. Sed urna orci, lobortis nec consectetur efficitur, sagittis quis neque.Praesent non finibus neque. Suspendisse nec sagittis eros. Donec vitae fermentum augue. Aenean lacinia neque rutrum, volutpat metus sit amet, iaculis mauris. Sed quis porta purus, id vestibulum velit. Proin bibendum, felis a maximus bibendum, ante quam fermentum massa, vel tristique purus risus ac odio. Quisque ac elit vel odio maximus viverra. Praesent bibendum neque feugiat quam ornare, vitae fringilla purus imperdiet. Vivamus vehicula nulla ac ligula volutpat facilisis. Sed aliquam odio augue, sed pharetra lacus placerat ut. Proin venenatis scelerisque consectetur. Nullam nibh velit, consequat a purus et, efficitur sollicitudin felis. Quisque a euismod diam. Nam accumsan finibus ex quis fermentum. Ut non risus eget ipsum maximus facilisis ut quis arcu.",
    },
    {
      id: 2,
      title: "Article",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      imageUrl: "https://authorservices.taylorandfrancis.com/wp-content/uploads/2020/10/icon_draft_your_article.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue turpis ipsum. Donec eleifend mauris at eleifend mattis. Mauris eu elementum sem, ut ornare lacus. Phasellus vitae orci enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, ante et pretium feugiat, massa ipsum iaculis ante, sed consequat lectus purus id metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non malesuada ipsum. Ut et risus laoreet mauris tincidunt interdum eu at lectus. Mauris aliquam ligula ac faucibus pellentesque. Donec eget nulla vitae quam sodales semper. Sed id elit auctor, ultricies purus id, ornare odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum enim erat, dictum sed neque quis, imperdiet posuere sem. Sed urna orci, lobortis nec consectetur efficitur, sagittis quis neque.Praesent non finibus neque. Suspendisse nec sagittis eros. Donec vitae fermentum augue. Aenean lacinia neque rutrum, volutpat metus sit amet, iaculis mauris. Sed quis porta purus, id vestibulum velit. Proin bibendum, felis a maximus bibendum, ante quam fermentum massa, vel tristique purus risus ac odio. Quisque ac elit vel odio maximus viverra. Praesent bibendum neque feugiat quam ornare, vitae fringilla purus imperdiet. Vivamus vehicula nulla ac ligula volutpat facilisis. Sed aliquam odio augue, sed pharetra lacus placerat ut. Proin venenatis scelerisque consectetur. Nullam nibh velit, consequat a purus et, efficitur sollicitudin felis. Quisque a euismod diam. Nam accumsan finibus ex quis fermentum. Ut non risus eget ipsum maximus facilisis ut quis arcu."
    },
    {
      id: 3,
      title: "Article",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      imageUrl: "https://authorservices.taylorandfrancis.com/wp-content/uploads/2020/10/icon_draft_your_article.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue turpis ipsum. Donec eleifend mauris at eleifend mattis. Mauris eu elementum sem, ut ornare lacus. Phasellus vitae orci enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, ante et pretium feugiat, massa ipsum iaculis ante, sed consequat lectus purus id metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non malesuada ipsum. Ut et risus laoreet mauris tincidunt interdum eu at lectus. Mauris aliquam ligula ac faucibus pellentesque. Donec eget nulla vitae quam sodales semper. Sed id elit auctor, ultricies purus id, ornare odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum enim erat, dictum sed neque quis, imperdiet posuere sem. Sed urna orci, lobortis nec consectetur efficitur, sagittis quis neque.Praesent non finibus neque. Suspendisse nec sagittis eros. Donec vitae fermentum augue. Aenean lacinia neque rutrum, volutpat metus sit amet, iaculis mauris. Sed quis porta purus, id vestibulum velit. Proin bibendum, felis a maximus bibendum, ante quam fermentum massa, vel tristique purus risus ac odio. Quisque ac elit vel odio maximus viverra. Praesent bibendum neque feugiat quam ornare, vitae fringilla purus imperdiet. Vivamus vehicula nulla ac ligula volutpat facilisis. Sed aliquam odio augue, sed pharetra lacus placerat ut. Proin venenatis scelerisque consectetur. Nullam nibh velit, consequat a purus et, efficitur sollicitudin felis. Quisque a euismod diam. Nam accumsan finibus ex quis fermentum. Ut non risus eget ipsum maximus facilisis ut quis arcu."
    },
    {
      id: 4,
      title: "Article",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      imageUrl: "https://authorservices.taylorandfrancis.com/wp-content/uploads/2020/10/icon_draft_your_article.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue turpis ipsum. Donec eleifend mauris at eleifend mattis. Mauris eu elementum sem, ut ornare lacus. Phasellus vitae orci enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, ante et pretium feugiat, massa ipsum iaculis ante, sed consequat lectus purus id metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non malesuada ipsum. Ut et risus laoreet mauris tincidunt interdum eu at lectus. Mauris aliquam ligula ac faucibus pellentesque. Donec eget nulla vitae quam sodales semper. Sed id elit auctor, ultricies purus id, ornare odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum enim erat, dictum sed neque quis, imperdiet posuere sem. Sed urna orci, lobortis nec consectetur efficitur, sagittis quis neque.Praesent non finibus neque. Suspendisse nec sagittis eros. Donec vitae fermentum augue. Aenean lacinia neque rutrum, volutpat metus sit amet, iaculis mauris. Sed quis porta purus, id vestibulum velit. Proin bibendum, felis a maximus bibendum, ante quam fermentum massa, vel tristique purus risus ac odio. Quisque ac elit vel odio maximus viverra. Praesent bibendum neque feugiat quam ornare, vitae fringilla purus imperdiet. Vivamus vehicula nulla ac ligula volutpat facilisis. Sed aliquam odio augue, sed pharetra lacus placerat ut. Proin venenatis scelerisque consectetur. Nullam nibh velit, consequat a purus et, efficitur sollicitudin felis. Quisque a euismod diam. Nam accumsan finibus ex quis fermentum. Ut non risus eget ipsum maximus facilisis ut quis arcu."
    },
    {
      id: 5,
      title: "Article",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      imageUrl: "https://authorservices.taylorandfrancis.com/wp-content/uploads/2020/10/icon_draft_your_article.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue turpis ipsum. Donec eleifend mauris at eleifend mattis. Mauris eu elementum sem, ut ornare lacus. Phasellus vitae orci enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, ante et pretium feugiat, massa ipsum iaculis ante, sed consequat lectus purus id metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non malesuada ipsum. Ut et risus laoreet mauris tincidunt interdum eu at lectus. Mauris aliquam ligula ac faucibus pellentesque. Donec eget nulla vitae quam sodales semper. Sed id elit auctor, ultricies purus id, ornare odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum enim erat, dictum sed neque quis, imperdiet posuere sem. Sed urna orci, lobortis nec consectetur efficitur, sagittis quis neque.Praesent non finibus neque. Suspendisse nec sagittis eros. Donec vitae fermentum augue. Aenean lacinia neque rutrum, volutpat metus sit amet, iaculis mauris. Sed quis porta purus, id vestibulum velit. Proin bibendum, felis a maximus bibendum, ante quam fermentum massa, vel tristique purus risus ac odio. Quisque ac elit vel odio maximus viverra. Praesent bibendum neque feugiat quam ornare, vitae fringilla purus imperdiet. Vivamus vehicula nulla ac ligula volutpat facilisis. Sed aliquam odio augue, sed pharetra lacus placerat ut. Proin venenatis scelerisque consectetur. Nullam nibh velit, consequat a purus et, efficitur sollicitudin felis. Quisque a euismod diam. Nam accumsan finibus ex quis fermentum. Ut non risus eget ipsum maximus facilisis ut quis arcu."
    },
    {
      id: 6,
      title: "Article",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      imageUrl: "https://authorservices.taylorandfrancis.com/wp-content/uploads/2020/10/icon_draft_your_article.svg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue turpis ipsum. Donec eleifend mauris at eleifend mattis. Mauris eu elementum sem, ut ornare lacus. Phasellus vitae orci enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, ante et pretium feugiat, massa ipsum iaculis ante, sed consequat lectus purus id metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non malesuada ipsum. Ut et risus laoreet mauris tincidunt interdum eu at lectus. Mauris aliquam ligula ac faucibus pellentesque. Donec eget nulla vitae quam sodales semper. Sed id elit auctor, ultricies purus id, ornare odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum enim erat, dictum sed neque quis, imperdiet posuere sem. Sed urna orci, lobortis nec consectetur efficitur, sagittis quis neque.Praesent non finibus neque. Suspendisse nec sagittis eros. Donec vitae fermentum augue. Aenean lacinia neque rutrum, volutpat metus sit amet, iaculis mauris. Sed quis porta purus, id vestibulum velit. Proin bibendum, felis a maximus bibendum, ante quam fermentum massa, vel tristique purus risus ac odio. Quisque ac elit vel odio maximus viverra. Praesent bibendum neque feugiat quam ornare, vitae fringilla purus imperdiet. Vivamus vehicula nulla ac ligula volutpat facilisis. Sed aliquam odio augue, sed pharetra lacus placerat ut. Proin venenatis scelerisque consectetur. Nullam nibh velit, consequat a purus et, efficitur sollicitudin felis. Quisque a euismod diam. Nam accumsan finibus ex quis fermentum. Ut non risus eget ipsum maximus facilisis ut quis arcu."
    }
  ];
  
  export default postsData;
  