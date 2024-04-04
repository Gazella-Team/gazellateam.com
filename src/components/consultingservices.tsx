const consultingServiceData = [
    {heading:"App Development", description:"Native app development for any project"},
    {heading:"Web Development", description:"Native app development for any project"},
    {heading:"Api Development", description:"Native app development for any project"},
]

export default function ConsultingServices() {
    return (
      <section className="py-[100px] pt-[00px]">
        <div className="w-[95%] mx-auto max-w-main lg:w-[90%]">
          <div className="grid grid-cols-3 gap-x-5">
            {consultingServiceData.map((v, index) => <ConsultingServiceCard key={v} Obj={v} />)}
          </div>
        </div>
      </section>
    );
}


const ConsultingServiceCard = (props:any) => {
    return (
        <div style={{backgroundImage: 'linear-gradient(to bottom, rgba(0,10,93,0) 0%, rgba(0,0,129,0.8)), url("/services/app.svg")'}} className="min-h-[500px] bg-center bg-cover bg-main rounded-xl flex flex-col justify-end p-10">
            <div className="text-white">
                <h1 className="text-xl font-[300] mb-1">{props.Obj.heading}</h1>
                <p className="font-[200] text-gray-200">{props.Obj.description}</p>
            </div>
        </div>
    )
}
