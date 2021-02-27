const dataPrice =  [
    {
    price:8,
    pageViews:"10K",
    } 
    ,
    {
      price:12,
      pageViews:"50K",
    } 
    ,
   {
      price:16,
      pageViews:"100K",
    } 
    ,
    {
      price:24,
      pageViews:"500K",
    } 
    ,
    {
      price:36,
      pageViews:"1M",
    },      
];

const slider = document.querySelector('.slider');
const monthlyPrice = document.querySelector('.card__monthly-price > span');
const pageViewsNbr = document.querySelector('.card__title > span');
const toggleBtn = document.querySelector('.toogle');
const submitBtn = document.querySelector('.card__button');
const cardEl = document.querySelector('.card');

slider.oninput = function() {
  var sliderVal = this.value;
  var value = (this.value-this.min)/(this.max-this.min)*100;
  this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, hsl(224, 65%, 95%)' + value + '%, hsl(224, 65%, 95%) 100%)';

  // Update outputs
  pageViewsNbr.innerHTML = dataPrice[sliderVal].pageViews;
  monthlyPrice.innerHTML = displayNbr(dataPrice[sliderVal].price);
};

toggleBtn.addEventListener('click', (e) => {
  const sliderVal = slider.value;
  e.currentTarget.classList.toggle("toogle--on");
  if (e.currentTarget.classList.contains("toogle--on")) {
    monthlyPrice.innerHTML = displayNbr(dataPrice[sliderVal].price * .75);
  }
  else {
    monthlyPrice.innerHTML = displayNbr(dataPrice[sliderVal].price);
  }
});

submitBtn.addEventListener('click', () => {
  cardEl.innerHTML = `Welcome to the FrontEndMentor Community ! <br> You choosed ${pageViewsNbr.innerHTML} pageviews for ${monthlyPrice.innerHTML}/month.`;
  cardEl.style.padding = '1.5rem';
  cardEl.style.textTransform = 'uppercase';
  cardEl.style.fontSize = '1.5rem';
});
function displayNbr(nbr) {
  if(nbr > 9) {
    return `$${nbr}.00`;
  }
  else {
    return `$0${nbr}.00`;
  }
}