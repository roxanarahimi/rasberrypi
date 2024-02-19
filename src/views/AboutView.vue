<template>
  <div v-if="!admin" class="auth row justify-content-center">
    <div class="col-3 my-5">
      <div class="card">
        <div class="card-header text-center">
          ورود ادمین
        </div>
        <div class="card-body">
          <input type="text" id="username" class="form-control my-2 form-control-sm" placeholder="نام کاربری">
          <input type="password" id="password" class="form-control my-2 form-control-sm" placeholder="کلمه عبور">
        </div>
        <div class="card-footer">
          <div class="text-center">
            <button class="btn btn-success btn-sm px-4" @click="login">ورود</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-show="admin" class="form">

    <h3 class="text-center my-5">ویرایش اطلاعات</h3>
    <div class="row d-flex justify-content-center">
      <div class="col-5"  style="font-size: 20px ; padding: 50px; line-height: 30px">

        یک کیلو کاغذ
        <input type="text" id="paper"  class="form-control input" required>
        تومان

        <br>
        یک کیلو مقوا
        <input type="text" id="cardboard" class="form-control input" required>
        تومان
        <br>

        <input type="text" id="paperCardboardWeight" class="form-control input" required>
        کیلوگرم کاغـذ و مقــوا
        <input type="text" id="paperCardboardPrice" class="form-control input" required>
        تومان


      </div>
      <div class="col-5" style="font-size: 20px ; padding: 50px; line-height: 30px">
        یک کیلو شیشه
        <input type="text" id="glass" class="form-control input" required>
        تومان

        <br>
        یک کیلو پلاستیک
        <input type="text" id="plastic" class="form-control input" required>
        تومان

        <br>

        <input type="text" id="glassPlasticWeight" class="form-control input" required>
        کیلوگرم شیشه و پلاستیک
        <input type="text" id="glassPlasticPrice" class="form-control input" required>
        تومان


      </div>
      <div class="col-10"  style="font-size: 20px ; padding: 50px; line-height: 30px">
        تاخیر بین اسلاید ها
        <input type="text" id="sliderDelay" class="form-control input" required>
         ثانیه
      </div>
 <div class="col-12 text-center">
        <button class="btn btn-primary m-2" @click="submit">ویرایش اطلاعات</button>
      </div>

    </div>

  </div>
</template>
<script>
import {onMounted, ref} from "vue";

export default {
  setup() {
    const admin = ref(false);
    const login = () => {
      fetch("/js/style.json")
          .then((res) => res.text())
          .then((text) => {
            let user = JSON.parse(text);
            if (document.querySelector('#username').value == user.username && document.querySelector('#password').value == user.password) {
              admin.value = true;
            } else {
              alert('اطلاعات ادمین اشتباه است.')
            }

          })
          .catch((e) => console.error(e));
    };
    const getData = () => {
      if (!localStorage.getItem('info')){
        fetch("/js/info.json")
            .then((res) => res.text())
            .then((text) => {
              localStorage.setItem('info', text);
            })
            .catch((e) => console.error(e));
      }

      let info = JSON.parse(localStorage.getItem('info'));
      document.querySelector('#paper').value = info.paper;
      document.querySelector('#cardboard').value = info.cardboard;
      document.querySelector('#paperCardboardWeight').value = info.paperCardboardWeight;
      document.querySelector('#paperCardboardPrice').value = info.paperCardboardPrice;
      document.querySelector('#glass').value = info.glass;
      document.querySelector('#plastic').value = info.plastic;
      document.querySelector('#glassPlasticWeight').value = info.glassPlasticWeight;
      document.querySelector('#glassPlasticPrice').value = info.glassPlasticPrice;
      document.querySelector('#sliderDelay').value = info.sliderDelay/1000;

    }
    const submit = () => {
      let errors = [];
      let emptyFieldsCount = 0;
      let req = document.querySelectorAll('[required]');
      req.forEach((element) => {
        if (element.value === "") {
          element.classList.add('hasError');
          element.nextSibling.innerHTML = "فیلد اجباری";
          emptyFieldsCount++;
        } else {
          element.classList.remove('hasError');
          element.nextSibling.innerHTML = "";
        }
      });
      if (emptyFieldsCount === 0) {
        let myPromise = new Promise(function(myResolve, myReject) {
          let data = {
            "paper": document.querySelector('#paper').value,
            "cardboard": document.querySelector('#cardboard').value,
            "paperCardboardWeight": document.querySelector('#paperCardboardWeight').value,
            "paperCardboardPrice": document.querySelector('#paperCardboardPrice').value,
            "glass": document.querySelector('#glass').value,
            "plastic": document.querySelector('#plastic').value,
            "glassPlasticWeight":  document.querySelector('#glassPlasticWeight').value,
            "glassPlasticPrice":document.querySelector('#glassPlasticPrice').value,
            "sliderDelay": document.querySelector('#sliderDelay').value*1000
          }
          console.log('data', data)
          localStorage.removeItem('info')
          localStorage.setItem('info', JSON.stringify(data))

          myResolve(); // when successful
          myReject();  // when error
        });



        myPromise.then(
            function(value) {
              alert('اطلاعات با موفقیت بروزرسانی شد');
              console.log(JSON.parse(localStorage.getItem('info')))
              },
            function(error) { alert(error) }
        );

      }

    }
    onMounted(() => {
      getData();
    });
    return {
      getData,
      login,
      admin,
      submit
    }

  }
}
</script>
<style>
.input {
  width: 80px !important;
  display: inline !important;
  height: 20px;
  text-align: center;
  direction: ltr;
  border: 2px dotted blue !important;
}
</style>