

const PriceOption = ({option}) => {
    const[ price,name,feature] = option
    return (
        <div>
            <h2>
                <span className="text-7xl">
                    {name}
                </span>
                <span className="text-3xl">
                      /mon
                </span>
            </h2>
        </div>
    );
};

export default PriceOption;