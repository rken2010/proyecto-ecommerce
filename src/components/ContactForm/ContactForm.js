import { Formik } from 'formik'
import {  Input,  Container, Text, Button, FormLabel, Heading } from '@chakra-ui/react'

const ContactForm = ( {setContact} ) => {

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
        name: "",
        mail: "",
        phone: "",
        address: "",
        comment: ""
      }}

      onSubmit = { (values) => { 
        
        const buyer =  JSON.stringify(values, null, 2 )
        setContact(buyer) 
      }}

      validate = { ( values ) => {
        const mjeError = {}

        if(!values.name){
           mjeError.name = "Por favor ingrese su nombre"
        }
        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
            mjeError.name = "El nombre no es valido, ingrese solo letras y espacios"
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
          <Heading m="15px" as='h2' size='lg' align="center" >Complete con sus datos para confirmar la compra</Heading>
          <FormLabel htmlFor='name'>Nombre</FormLabel>
              <Input 
                variant='filled'
                type="text"
                id='name'
                name = "name"
                placeholder= "Ingrese su nombre"
                value={values.name}
                size='md' 
                onChange={ handleChange }
                onBlur = { handleBlur}
                mt="5px" 
                mb="5px"
              />
              {errors.name && <Text color="red.500" mt="5px" mb="5px">{ errors.name }</Text> }
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