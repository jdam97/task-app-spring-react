
interface CardsInfoProps {
    title: string;
    icon: React.ReactNode;
    value: number;
    valueClassName: string;
}

function CardsInfo ({title,icon,value,valueClassName}:CardsInfoProps) {
    return (
        <div className="flex flex-row bg-white rounded-lg shadow-md p-4 w-xs items-center justify-between">
            <div className="flex flex-col">
                <h4>{title}</h4>
                <p className={`font-bold text-3xl ${valueClassName}`}>{value}</p>
            </div>
            <div>
                {icon}
            </div>
        </div>
    )
  
}

export default CardsInfo
