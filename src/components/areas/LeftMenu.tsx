import { useEffect, useState } from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { getCategories } from "../../services/DataService";
import Category from "../../models/Category";

const LeftMenu = () => {
    const { width } = useWindowDimensions();
    const [categories, setCategories] = useState<JSX.Element>(
        <div>Left Menu</div>
    );

    useEffect(() => {
        (async () => {
            try {
                const categoriesMap = (await getCategories()).map(
                    (cat: Category) => {
                        return <li key={cat.id}>{cat.name}</li>;
                    }
                );

                setCategories(<ul className="category">{categoriesMap}</ul>);
            } catch (err) {
                console.log(err);
            }
        })()    
      }, []);

      if (width <= 768) {
        return null;
    }
    
    return <div className="leftmenu">{categories}</div>;
};

export default LeftMenu;