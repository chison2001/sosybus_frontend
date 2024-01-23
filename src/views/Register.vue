

<template>
    <div class="bg-image" style="background-image: url(https://res.cloudinary.com/dwbnrx0mg/image/upload/v1705895258/doan/a_01-1920x1080-1a7d0f916f14ccb238fe9fd0862894ee_npwmhe.jpg); height: 100vh">

            <section class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-6">
                    <div class="card rounded-3 text-black">
                    <div class="row g-0">
                        <div class="col-lg">
                            
                        <div class="card-body p-md-5 mx-md-4">
                          <div class="text-center">
                                    <img src="https://res.cloudinary.com/dwbnrx0mg/image/upload/c_thumb,w_200,g_face/v1705993978/doan/3752bcc334a1ba2613c6d389318f503b_xau5p1.jpg" alt="">
                                    <h4 class="mt-1 mb-5 pb-1">Chào mừng đến với BusGoo</h4>
                            </div>
                        
                            <Form >
                                <div
                                    v-for="{ as, name, label, ...attrs } in formSchema.fields"
                                    :key="name"
                                  
                                >
                                <label class="form-label" :for="name">{{ label }}</label>
                                <Field class="form-control" :as="as" :id="name" :name="name" v-bind="attrs" :rules="getFieldRules(name)"/>
                                <ErrorMessage class="text-danger"  :name="name" />
                                </div>
                               
                                <div class="d-flex justify-content-center">
                                    <button class="btn  btn-warning px-5 my-3 " >
                                        <span class="text-white">Tạo tài khoản</span>
                                    </button>
                                </div>
                            </Form>
                            <span>Bạn đã có tài khoản?</span><span class="text-regis fw-bold" @click="forwardLogin"> Đăng nhập</span>
                            
                        </div>
                            

                        
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
            </section>
    </div>
    
</template>

<script lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineComponent} from 'vue';
import { Form, Field, ErrorMessage,   defineRule , configure} from 'vee-validate';
import { min, email, confirmed, required} from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n';
import vi from '@vee-validate/i18n/dist/locale/vi.json';
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('confirmed', confirmed);
defineRule('phone', (value :any) => {
  if (!/(84|0(?:3|5|7|8|9))+([0-9]{8})\b/g.test(value)) {
    return 'Số điện thoại phải là số điện thoại hợp lệ';
  }
  return true;
});
localize({ vi });
configure({
  generateMessage: localize('vi', {
    names: {
      email: 'Email',
      phone: 'Số điện thoại',
      password: 'Mật khẩu',
      confirmpassword: 'Xác nhận mật khẩu'
    },
  }),
});

export default defineComponent({
    components: { 
        FontAwesomeIcon,
        Form,
        Field,
        ErrorMessage
    },
    data: () => {
    const phoneRegex: RegExp = /(84|0(?:3|5|7|8|9))+([0-9]{8})\b/g;
    
    const formSchema = {
      fields: [
        
        {
          label: 'Email',
          name: 'email',
          as: 'input',
        },
        {
          label: 'Số điện thoại',
          name: 'phone',
          as: 'input',
        },
        
        {
          label: 'Mật khẩu ',
          name: 'password',
          as: 'input',
          type: 'password',
        },
        {
          label: 'Xác nhận mật khẩu ',
          name: 'confirmpassword',
          as: 'input',
          type: 'password',
        },
      ],
    };
    return {
      formSchema,
      phoneRegex
    };
  },
  methods: {
    getFieldRules(fieldName : any) {
      switch (fieldName) {
        case 'email':
          return 'required|email';
        case 'phone':
          return `required|phone`;
        case 'password':
          return 'required|min:6';
        case 'confirmpassword':
          return 'required|confirmed:@password';
        default:
          return '';
      }
    },
    forwardLogin(){
      this.$router.push("/login");
    }
  },
})
</script>
<style scoped>
    .text-gray{
    /* fallback for old browsers */
    text-align: center;
    color: #9b9b9b;
    }
    .text-regis{
    color: #ff0000;

    }


    @media (min-width: 768px) {
    .gradient-form {
    height: 100vh !important;
    }
    }
    @media (min-width: 769px) {
    .gradient-custom-2 {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
    }
}
</style>

