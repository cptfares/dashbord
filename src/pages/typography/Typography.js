import React from "react";
import { Col, Button, Row } from "reactstrap";
import Widget from "../../components/Widget";
import "./typoStyle.css";

const Typography = () => {
  return (
    <div>

      <Row className="container" >
        <Col lg={12}>

          <Widget title={"fill the form to get your loan"}>
        <Col>
             <form>
               <Row>
                              <Col>
                              <div class="form-floating mb-3">
                      <input  class="form-control" id="fullName" placeholder="name@example.com"></input>
                     <label for="fullName">Full name:</label>
                  </div>
             
             </Col>
             <Col>
             <div class="form-floating mb-3">
                      <input type="number" class="form-control" id="phonNumber" placeholder="name@example.com"></input>
                      <label for="phonNumber">phone number:</label>
                </div>

             </Col>
               </Row>
                <div class="form-floating mb-3">
                      <input  class="form-control" id="adress" placeholder="name@example.com"></input>
                      <label for="adress">adress:</label>
                </div>
                <div class="form-floating">
                    <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                       <option selected>Open this select menu</option>
                       <option value="1">One</option>
                       <option value="2">Two</option>
                       <option value="3">Three</option>
                    </select>
                 <label for="floatingSelectGrid">Works with selects</label>
                 </div>
                 <Row style={{marginTop:"1rem"}}>
                 <Col>
                              <div class="form-floating mb-3">
                      <input type="number" class="form-control" id="Cin" placeholder="name@example.com"></input>
                     <label for="CIN">CIN:</label>
                  </div>
             
             </Col>
             <Col >
             <div class="form-floating">
                    <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                       <option selected>city</option>
                       <option value="1">One</option>
                       <option value="2">Two</option>
                       <option value="3">Three</option>
                    </select>
                 <label for="floatingSelectGrid">Works with selects</label>
                 </div>

             </Col>
               </Row>
               <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>

<Button style={{marginTop:"1rem",float:"right"}}  color={"warning"} className="mr-xs" size="sm">
                   send 
                  </Button>
             </form>





          </Col>



          </Widget>
        </Col>
        <Col lg={6}>
        </Col>
      </Row>

    </div>
  );
};

export default Typography;
