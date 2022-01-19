import { Select } from 'antd';
import { useMoralisDapp } from 'providers/MoralisDappProvider/MoralisDappProvider';
import { getCollectionsByChain } from 'helpers/collections';

function SearchCollections({setInputValue}) {
    const { Option } = Select;
    const { chainId } = useMoralisDapp();
    const NFTCollections = getCollectionsByChain(chainId)

    function changeCollection(value){
        setInputValue(value)
    }

    return (
        <>
        <Select
            showSearch
            style={{width: "1000px", marginLeft: "20px"}}
            placeholder= "Search Collections"
            optionFilterProp= "children"
            onChange= {changeCollection}
        >
            {NFTCollections &&
                NFTCollections.map((collection, i) => 
                    <Option value={collection.addrs} key={i}>{collection.name}</Option>
                )
            }

        </Select>
        </> 
    )


}

export default SearchCollections;

