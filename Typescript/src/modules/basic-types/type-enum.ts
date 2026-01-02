export const bootstrap = (): void => {

    enum OrderStatus{
        PENDING,
        DELIVERED,
        CANCELED = "Cancelado"
    }

    console.log(OrderStatus)
    console.log(OrderStatus.CANCELED)
    console.log(OrderStatus[1])

    enum OrderStatus {
        WAITINGFORPAYMENT = 500,
        SENT = 'Enviado'
    }

    function changeOrderStatus(newStatus: OrderStatus): void {
        if(newStatus === OrderStatus.SENT) {
            console.log('Novo status: ', newStatus)
        }
    }

    changeOrderStatus(OrderStatus.SENT)
}