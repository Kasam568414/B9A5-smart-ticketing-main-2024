
const allSeat = document.querySelectorAll(".seat");
const setNumber = document.getElementById("seatCount");

let seatNumberInn = document.getElementById("seatCount").innerText;
let countNumber = Number(seatNumberInn);

const seatBooking = document.getElementById("seatBooking");
let seatBookingAdd = 0;

const itemSelected = document.querySelector(".itemSelected");
const ticketPrice = Number(document.querySelector(".priceTicket").innerText);
let tickCountPrice = 0;
const body = document.querySelector(".tbody");


const apply = document.querySelector(".apply");
const coupon = document.querySelector(".coupon")


const totalPrice = document.querySelector(".total")
const discountPrice = document.querySelector(".discount")


const coupon1 = document.querySelector(".coupon1").innerText;
const coupon2 = document.querySelector(".coupon2").innerText;

const coponContainer = document.querySelector(".containerCopon");

const submit = document.querySelector(".submit")






for (let seat of allSeat) {
  seat.addEventListener("click", function (e) {
    console.log(e.target.parentNode);
    countNumber = countNumber - 1;
    seatBookingAdd = seatBookingAdd + 1;

    if (seatBookingAdd === 4) {
        coupon.removeAttribute('disabled');
        apply.removeAttribute('disabled');
        apply.style.background = "#1DD100";

        
    }

    if (seatBookingAdd >4 || seatBookingAdd < 0) {
      alert("No Click More Than 4");
    } else {
      seatBooking.innerHTML = seatBookingAdd;
      setNumber.innerText = countNumber;

      const value = e.target.innerText;
      const seatValueLower = value.toLowerCase();
      const backgroundStyle = document.querySelector('.' + seatValueLower);
      backgroundStyle.style.background = "#1DD100";
      backgroundStyle.style.color = "#FFFFFF";
      backgroundStyle.setAttribute('disabled','');

      itemSelected.style.display = 'none';

      const newElement = document.createElement('tr');
      newElement.innerHTML = `

            <td class="px-0.5 md:px-2rem">${value}</td>
            <td class="px-0.5 md:px-2rem">Economy</td>
            <td class="text-end px-0.5 md:px-2rem">500</td>
            
           `;
           body.appendChild(newElement);


           tickCountPrice = tickCountPrice + ticketPrice;
           totalPrice.innerHTML = tickCountPrice;
           discountPrice.innerHTML=tickCountPrice;

    };
  });
};


apply.addEventListener("click", function(){
    const cop = coupon.value ;
    if (coupon1 === cop && cop != '') {
        const dis = tickCountPrice * 15 /100;
        discountPrice.innerHTML = tickCountPrice - dis;
        coponContainer.style.display ='none'
        
    }else if (coupon2 === cop) {
        const dis = tickCountPrice * 20 /100;
        discountPrice.innerHTML = tickCountPrice - dis;
        coponContainer.style.display = 'none'
        
    }else{
      alert("invalid coupon")
    }
})

const sucess1 = document.getElementById("success")
const header = document.getElementById("header")
const main = document.getElementById("main")
const foot = document.getElementById("footer")

submit.addEventListener("click", function(){
  header.style.display = "none"
  main.style.display= "none"
  foot.style.display = "none"
  sucess1.style.display = "block"
})


const continue1 = document.querySelector(".continue");
continue1.addEventListener("click", function(){

  header.style.display = "block"
  main.style.display= "block"
  foot.style.display = "block"
  sucess1.style.display = "none"

})
