import React from 'react'

const Button = ({styles,setCount,count,type,name}) => {
    const handleCount = () => {
            if(type==='inc')
            {
                setCount(count+1)
            }else if(type==='dec')
            {
                if(count>0)
                {
                    setCount(count-1)
                }else
                {
                    setCount(0)
                }
            }else if(type==='res')
            {
                setCount(0)
            }
    }
    return (
            <button className={styles} onClick={handleCount}>{name}</button>
    )
}

export default Button