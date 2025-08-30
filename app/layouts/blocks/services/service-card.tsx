import { IServiceCard } from "./services"
import ServicesSvgSelector from "./services-svg-selector"

const ServiceCard = ({ subtitle, type }: IServiceCard) => {
  return (
    <div className="relative z-10 flex flex-col bg-gray-lightness rounded-lg pb-10 pt-5 items-center gap-7">
      <ServicesSvgSelector className="w-[3.75rem] h-[3.75rem]" type={type} />
      <span className="text-base font-bold text-black">{subtitle}</span>
    </div>
  )
}

export default ServiceCard
