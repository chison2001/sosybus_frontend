

<template>
    <div class="bg-image" style="background-image: url(https://res.cloudinary.com/dwbnrx0mg/image/upload/v1705895258/doan/a_01-1920x1080-1a7d0f916f14ccb238fe9fd0862894ee_npwmhe.jpg); height: 100vh">

            <section class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-6">
                    <div class="card rounded-3 text-black">
                    <div class="row g-0">
                        <div class="col-lg">
                            
                        <div class="card-body p-md-5 mx-md-4">
                            <Form >
                                <div
                                    v-for="{ as, name, label, ...attrs } in formSchema.fields"
                                    :key="name"
                                  
                                >
                                <label class="form-label" :for="name">{{ label }}</label>
                                <Field class="form-control" :as="as" :id="name" :name="name" v-bind="attrs" />
                                <ErrorMessage class="text-danger"  :name="name" />
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button class="btn  btn-warning px-5 my-3 ">
                                        <span class="text-white">Đăng nhập</span>
                                    </button>
                                </div>
                            </Form>
                            <span>Bạn chưa có tài khoản?</span><span class="text-regis fw-bold"> Đăng kí</span>
                            <p class="text-gray">-OR-</p>
                            <div class="d-flex flex-row justify-content-evenly">
                                <button class="btn btn-light border border-dark m-10">
                                    <FontAwesomeIcon icon="fa-brands fa-google" />
                                    <span class="p-2">Đăng nhập với google</span>
                                </button>
                                
                                <button class="btn btn-light border border-dark m-10">
                                    <FontAwesomeIcon icon="fa-brands fa-github" />
                                    <span class="p-2">Đăng nhập với github</span>
                                </button>
                            </div>
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
import { Form, Field, ErrorMessage  } from 'vee-validate';
import * as Yup from 'yup'

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
          rules: Yup.string().trim()
            .email("Sai định dạng email.")
            .required("Không được để trống."),
        },
        {
          label: 'Số điện thoại',
          name: 'phone',
          as: 'input',
          rules: Yup.string().trim()
            .matches(phoneRegex, "Sai định dạng số điện thoại")
            .required("Không được để trống."),
        },
        
        {
          label: 'Mật khẩu ',
          name: 'password',
          as: 'input',
          type: 'password',
          rules: Yup.string().trim()
            .min(6, "Tối thiểu 6 kí tự.")
            .required("Không được để trống.")
        },
        {
          label: 'Xác nhận mật khẩu',
          name: 'confirmpassword',
          as: 'input',
          type: 'password',
          rules: Yup.string().trim()
            .min(6, "Tối thiểu 6 kí tự.")
            .required("Không được để trống.")
            .oneOf([Yup.ref('password'), Yup.ref('confirmpassword')], 'Passwords must match')
        },
      ],
    };
    return {
      formSchema,
    };
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

