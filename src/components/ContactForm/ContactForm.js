import { useState } from 'react'
import { Formik } from 'formik'
import {  Input,  Container, Text, Button, FormLabel } from '@chakra-ui/react'


const ContactForm = ( setContact ) => {

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [comment, setComment] = useState('')



return (
  <Container 
    maxW='container.sm'
    bg="gray.200"
    borderRadius="25px"
    padding="20px"
    mt="25px" 
    mb="25px"
    >
    <Formik
      initialValues={{
        nameBuyer: "",
        mail: "",
        phone: "",
        address: "",
        comment: "Escriba su comentario aqui"
      }}

      onSubmit = { (values) => { console.log(values) } }

      validate = { ( values ) => {
        const mjeError = {}

        if(!values.nameBuyer){
           mjeError.nameBuyer = "Por favor ingrese su nombre"
        }
        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nameBuyer)){
            mjeError.nameBuyer = "El nombre no es valido, ingrese solo letras y espacios"
        }  
        
        if(!values.mail){
            mjeError.mail = "Por favor ingrese un E-mail"
        }
       else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)){
          mjeError.mail = "Ingrese un E-mail valido"
       }
       if(!values.phone){
        mjeError.phone = "Ingrese un Telefono"
        }
        else if(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(values.phone))
        {
          mjeError.phone = "Ingrese un numero valido"
        }

       if(!values.mail){
        mjeError.address = "Ingrese una direccion valida"
        }

      return mjeError
    
    }}
     
    >
      { ( { handleSubmit, values, handleChange, handleBlur, errors } ) => (

        <form onSubmit={ handleSubmit }>
          <FormLabel htmlFor='nameBuyer'>Nombre</FormLabel>
              <Input 
                variant='filled'
                type="text"
                id='nameBuyer'
                name = "nameBuyer"
                placeholder= "Ingrese su nombre"
                value={values.nameBuyer}
                size='md' 
                onChange={ handleChange }
                onBlur = { handleBlur}
                mt="5px" 
                mb="5px"
              />
              {errors.nameBuyer && <Text color="red.500" mt="5px" mb="5px">{ errors.nameBuyer }</Text> }
          <FormLabel htmlFor='email'>E-mail</FormLabel>
              <Input 
                variant='filled'
                type="email"
                id='email'
                name = "mail"
                placeholder= "ejemplo@mail.com"
                value={values.mail}
                size='md' 
                onChange={ handleChange }
                onBlur = { handleBlur}
                mt="5px" 
                mb="5px"
              />
          {errors.mail && <Text color="red.500">{ errors.mail }</Text> }
          <FormLabel htmlFor='address'>Dirección</FormLabel>
          <Input 
            variant='filled'
            type="text"
            id='address'
            name = "address"
            placeholder= "Evergreen Terrace 742"
            value={values.address}
            size='md' 
            onChange={ handleChange }
            onBlur = { handleBlur}
            mt="5px" 
            mb="5px"
          />
          {errors.address && <Text color="red.500" mt="5px" mb="5px">{ errors.address }</Text> }
          <FormLabel htmlFor='phone'>Telefono</FormLabel>
          <Input 
            variant='filled'
            type="phone"
            id='phone'
            name = "phone"
            placeholder= "12345678"
            value={values.phone}
            size='md' 
            onChange={ handleChange }
            onBlur = { handleBlur}
            mt="5px" 
            mb="5px"
          />
          {errors.phone && <Text color="red.500" mt="5px" mb="5px">{ errors.phone }</Text> }

        <Button 
          type="submit" 
          mt="5px" 
          mb="5px"
          colorScheme='blue'
          > Enviar </Button>
        </form>

      )}
    </Formik>
    
  </Container>
)

}
export default ContactForm