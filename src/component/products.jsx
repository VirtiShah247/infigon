import { Fragment, useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRipple
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Products = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');

        const data = await response.json();
        setData(data);
        setFilterData(data);
        setLoading(false);

      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    getProducts();


  }, [])

  const Loading = () => {
    return <>
      <div className="col-md-3">
        ...loading
      </div>
    </>
  }

  const filterProduct = (category) => {
    console.log("Category is ", category);
    setFilterData(data.filter((product) => product.category === category));
  }

  const ShowProducts = () => {
    return <Fragment>
      <div className="d-flex flex-wrap justify-content-center mb-5">
        <Button className="btn btn-outline-dark me-2 mt-2" onClick={() => setFilterData(data)}>All</Button>
        <Button className="btn btn-outline-dark me-2 mt-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</Button>
        <Button className="btn btn-outline-dark me-2 mt-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</Button>
        <Button className="btn btn-outline-dark me-2 mt-2" onClick={() => filterProduct("jewelery")}>Jewelery</Button>
        <Button className="btn btn-outline-dark me-2 mt-2" onClick={() => filterProduct("electronics")}>Electronics</Button>
      </div>
      {
        filterData.map((product) => {
          return (
            <Fragment>
              <MDBCard className="mb-5 col-md-3 col-sm-4">
                <Link to={`/products/${product.id}`} className="text-black">
                  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <img src={product.image} height="280rem" width="220rem" fluid alt='...' />
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>{product.title}</MDBCardTitle>
                    <MDBCardText>
                      {product.category}
                    </MDBCardText>
                    <MDBCardText className="fw-bold">
                      ${product.price}
                    </MDBCardText>
                  </MDBCardBody>
                </Link>
              </MDBCard>



            </Fragment>
          )
        })
      }
    </Fragment>
  }

  return (
    <Fragment>
      <div class="bg-gray-900 h-full text-white ">
        <div class="container my-4">
          <div class="row">
            <div class="col-12">
              <h1 class="fw-bolder text-center display-6">
                Latest Products
              </h1>
            </div>
          </div>
          <div class="row">
            {
              loading ? <Loading /> : <ShowProducts />
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}
