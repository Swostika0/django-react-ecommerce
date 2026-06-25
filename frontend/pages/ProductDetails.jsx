import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails(){
    const {id} = useParams();
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    const [product,setProduct] = useState(null);
    const [loading,setLoading] = useState(true);
    const [Error,setError] = useState(null);
   
    useEffect(()=> {
        fetch(`${BASEURL}/api/products/${id}`)
        .then((response) =>{
            if (!response.ok){
                throw new Error("failed to fetch product details");
            }
            return response.json();
        })
        .then((data) =>{
            setProduct(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });

    }, [id, BASEURL]);

    if (loading) {
        return <div>loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    if (!product) {
        return <div>No product found</div>;
    }

    return(
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10"></div>
            <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl w-full"></div>
                <div className="flex flex-col md:flex-row gap-8"></div>
    )
}