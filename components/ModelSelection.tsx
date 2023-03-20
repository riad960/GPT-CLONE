'use cient'
import useSWR from 'swr'
import Select from 'react-select'
const fetchModels=()=>fetch('/api/getEngines').then(res=>res.json())

const ModelSelection = () => {
    const {data:models,isLoading,error}=useSWR('models',fetchModels)
    const{data:model,mutate:setModel}=useSWR('model',{
      fallbackData:'text-davinci-003'
    })
    
    if(isLoading){
       return <div className="">
            Loading
        </div>
    }
    
  
  return (
    <div className='text-gray-700 my-2'>
        <Select 
        isSearchable
        isLoading={isLoading}
        placeholder={model}
        onChange={(e:any)=>setModel(e.value)}
      options={models.modelOptions
} />
    </div>
  )
}

export default ModelSelection