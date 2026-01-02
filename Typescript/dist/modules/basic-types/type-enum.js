export const bootstrap = () => {
    let OrderStatus;
    (function (OrderStatus) {
        OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
        OrderStatus[OrderStatus["DELIVERED"] = 1] = "DELIVERED";
        OrderStatus["CANCELED"] = "Cancelado";
    })(OrderStatus || (OrderStatus = {}));
    console.log(OrderStatus);
    console.log(OrderStatus.CANCELED);
    console.log(OrderStatus[1]);
    (function (OrderStatus) {
        OrderStatus[OrderStatus["WAITINGFORPAYMENT"] = 500] = "WAITINGFORPAYMENT";
        OrderStatus["SENT"] = "Enviado";
    })(OrderStatus || (OrderStatus = {}));
    function changeOrderStatus(newStatus) {
        if (newStatus === OrderStatus.SENT) {
            console.log('Novo status: ', newStatus);
        }
    }
    changeOrderStatus(OrderStatus.SENT);
};
