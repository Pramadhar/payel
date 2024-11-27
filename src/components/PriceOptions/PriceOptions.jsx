import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
  const priceOptions =   [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 30,
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "1 free fitness consultation"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 50,
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "5 group fitness classes per month",
                "1 personal training session"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 70,
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "Unlimited group fitness classes",
                "4 personal training sessions",
                "Access to sauna and steam room"
            ]
        },
        {
            "id": 4,
            "name": "Ultimate Plan",
            "price": 100,
            "features": [
                "Access to gym equipment",
                "Locker facility",
                "Unlimited group fitness classes",
                "8 personal training sessions",
                "Access to sauna and steam room",
                "Diet and nutrition consultation"
            ]
        }
    ]

    return (

        <div className="">
<h2 className="text-5xl">best gym</h2>
{
    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
}
        </div>
  
        
    );
};

export default PriceOptions;