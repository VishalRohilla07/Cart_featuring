import React from "react";

class CartItem extends React.Component{
   
    increaseQuantity= () =>{
        // this.state.qty += 1;
       // console.log('this',this.state);
        // setState form 1 shallow copying ,if previous state is not required
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        //setState form 2 if previous state required then this
        this.setState((prevState) => {
            return {
            qty: prevState.qty + 1
            } 
        });
    }

    decreaseQuantity= () =>{
        const {qty} = this.state;
        if( qty ==0){
            return;
        }
        //console.log('this',this.state);
        this.setState((prevState) =>{
            return {
                qty: prevState.qty - 1
            }
        });
    }


    render(){
        console.log('this.props',this.props);
        const {price,title,qty} = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25 }}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className ="cart-item-actions">
                        {/*Buttons*/}
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={this.increaseQuantity}/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"onClick={this.decreaseQuantity}/>
                        <img alt="delete" className="action-icons" src="https://img-premium.flaticon.com/png/512/484/premium/484662.png?token=exp=1631268370~hmac=5157f143bc678b6cadfa0e12540c748e"/>
                    </div>
                </div>
            </div>
        );
    } 
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background:'#ccc'
    }
}


export default CartItem;