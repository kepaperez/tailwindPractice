
export default function AboutPage() {

  const ContacConatiner = ({ name, time, info }) => {
    return (
    <div className="flex flex-col  p-5  md:p-10  w-96  border border-black hover:bg-black hover:text-white  cursor-pointer">
      
          <h5 className=" text-lg font-bold">{name}</h5>
          {time ?    <p className=" text-base">{time}</p>:<></>}
      
          <a className=" text-lg mt-5 block">{info}7</a>
     
      </div>

    )
  }

  return (
    <div className="flex flex-col align-middle  items-center  justify-center bg-white pt-20 p-10 ">
      <h2 className=" text-2xl font-semibold">Asistencia al cliente </h2>
      <p className="  text-center  mt-10 w-full  max-w-3xl ">
        Nuestro Servicio de Atención al Cliente está disponible para ayudarle con sus consultas relativas a pedidos en línea. Al ponerse en contacto con el Servicio de Atención al Cliente, acepta que sus datos se transfieran fuera de su país/región local.
        Nuestro Servicio de Atención al Cliente permanecerá excepcionalmente cerrado en la siguiente fecha:
        Martes 15 de Agosto de 2023 - Asunción
      </p>
      <section className="flex  justify-center mt-24  gap-12 flex-wrap   max-w-4xl  w-full">
        <ContacConatiner name={"CALL"} time={"Lun-Sab 9:30-19:00"} info={"+34 911 98 78 47"}/>
        <ContacConatiner name={"WHATSAPP"} time={"Lun-Sab 8:30-14:00"} info={"+34 911 987 847"}/>
        <ContacConatiner name={"EMAIL"}  info={"baleciagainfo@gmail.com"}/>
        <ContacConatiner name={"CONCERT AN APPOINTMENT"} time={"Lun-Sab 9:30-19:00"} info={"+34 911 98 78 47"}/>
         
      </section>
    </div>
  )
}
