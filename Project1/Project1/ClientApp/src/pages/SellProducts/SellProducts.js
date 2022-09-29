import React from 'react'
import CustomizedTable from '../../components/CustomizedTable/CustomizedTable'
import PageHeader from '../../components/PageHeader/PageHeader'

const SellProducts = () => {
    return (
        <>
            <PageHeader title='Vender productos' subTitle='Lista de productos para vender' />
            <CustomizedTable />
        </>
    )
}

export default SellProducts
