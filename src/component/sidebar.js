import { useSearchParams } from "react-router-dom";

export default function Sidebar(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('category'),'.searchParams')
    
    function onClickCategory(category) {
        setSearchParams({
            'category': category.id
        })
    }
    
    return (
        <div>
            {props.categories.map((category, key) => {
                return (
                    <div onClick={() => onClickCategory(category)}
                        className={"py-1 " + (props.currentCategory && parseInt(props.currentCategory) === category.id ? "text-primary" : "")}
                        key={key}>
                        {category.name}
                    </div>
                )
            })}
        </div>
    )
}