import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';


class HomeContainer extends Component {

    handleOnClick = () =>{
        console.log("handle on click");
        this.props.history.push('/customers');   
    }

    downloadPDFCustomers = () =>{ 
        //dont use fetch 
        this.getResourcePDF("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf");

        //use fetch and body is a stream 
        this.apiGetPDF("http://localhost:8081/downloadGeneralCondition/1017/1/1/371/0");
    }
    
    apiGetPDF = url => {
        fetch(url)
        .then(res => res.blob())
        .then(blob => {
            const pdfUrl = window.URL.createObjectURL(new Blob([blob]));
            this.downloadWithAnchor(pdfUrl);
        });        
    }

    //TODO encontrar manera de descargar el pdf en la misma pantalla y no abrir otra pantalla
    getResourcePDF = url => {
        this.downloadWithAnchor(url);
    }

    downloadWithAnchor = fileUrl => {
        const elementAnchor = document.createElement('a');
        elementAnchor.href = fileUrl;
        elementAnchor.setAttribute('download','mydummy.pdf');
        elementAnchor.setAttribute('target', '_blank');
    
        document.body.appendChild(elementAnchor);
    
        elementAnchor.click();
    
        elementAnchor.parentNode.removeChild(elementAnchor);
    }



    render() {
        return (
            <div>
                <AppFrame header="Customers" 
                 body={
                    <div>
                        <CustomerActions>
                            <button onClick={this.handleOnClick}> List of Customers  </button>
                            <button onClick={this.downloadPDFCustomers}> Download Customers  </button>
                        </CustomerActions>
                    </div>
                 }>
                   
                </AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default withRouter(HomeContainer);