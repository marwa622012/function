$(document).ready(function () {
    const apiUrl = "https://dummyjson.com/products";
    $.getJSON(apiUrl, function (data) {
      const productsArray = data.products; // Access the 'products' array
      const productsHtml = productsArray.map(product => `
        <div class="card">
          <img src="${product.thumbnail}" alt="${product.title}" class="img">
          <span class="title rounded-pill">${product.title}</span>
          <span class="price rounded-pill">$${product.price}</span>
          <div class="product-actions">
            <button class="add-to-cart">Add To Cart</button>
            <button class="buy-now">Buy Now</button>
          </div>
        </div>
      `).join("");
      $("#products").html(productsHtml); // Inject HTML into the container
    });
  });
  $(document).on("mouseover",".card",function(){
    $(this).find(".buy-now, .add-to-cart").show();
  })
  $(document).on("mouseout",".card",function(){
    $(this).find(".buy-now,.add-to-cart").hide();
  })
// Slider
setInterval(() => {
  $(document).ready(function () {
    let activepointer =$('.active-pointer-span');
    if (activepointer.next().length > 0) {
      activepointer.removeClass("active-pointer-span");
      activepointer.next().addClass("active-pointer-span");
    } else {
      $('.pointer-span').last().removeClass("active-pointer-span");
      $('.pointer-span').first().addClass("active-pointer-span");
    }
  });
}, 5000);
$(document).on('click','.pointer-span', function(){
  let order = $(this).data('order');
  $('.active-pointer-span').removeClass("active-pointer-span");
  $(this).addClass("active-pointer-span");
  let active_slide =$('.slide-test.active');
  console.log(active_slide);
  active_slide.removeClass('active').addClass('d-none');
  $('.slide-test').eq(order).addClass('active').removeClass('d-none');
})
