import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../slices/detailSlice'
import { useParams } from 'react-router-dom'
import FieldInput from '../../atoms/field_input/FieldInput'

const DetailData = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { data, loading, error } = useSelector(state => state.detail)

    useEffect(() => {
        dispatch(fetchData(id))
    }, [dispatch])

    console.log(data);

    if (loading) {
        return <div className=' flex justify-center items-center'>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="container flex flex-wrap shadow-md p-12 justify-evenly">
                <div className="flex flex-col">
                    <label>Fullname</label>
                    <FieldInput
                        type={"text"}
                        value={data.name}
                    >
                        Fullname
                    </FieldInput>
                </div>

                <div className="flex flex-col">
                    <label>Username</label>
                    <FieldInput
                        type={"text"}
                        value={data.username}
                    >
                        Username
                    </FieldInput>
                </div>

                <div className="flex flex-col">
                    <label>Email</label>
                    <FieldInput
                        type={"email"}
                        value={data.email}
                    >Email
                    </FieldInput>
                </div>

                <div className="flex flex-col">
                    <label>Phone</label>
                    <FieldInput
                        type={"text"}
                        value={data.phone}
                    >
                        Phone
                    </FieldInput>
                </div>

                <div className="flex flex-col">
                    <label>Website</label>
                    <FieldInput
                        type={"text"}
                        value={data.website}
                    >
                        Website
                    </FieldInput>
                </div>
            </div>
        </>
    )
}

export default DetailData