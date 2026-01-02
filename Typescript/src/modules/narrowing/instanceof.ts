export const bootstrap = (): void => {

    class BankAccount {
        protected holder: string;
        protected balance: number

        constructor(holder: string, balance: number) {
            this.holder = holder
            this.balance = balance
        }

        public getHolder(): string {
            return this.holder
        }
    }

    class CheckingAccount extends BankAccount {
        private overdraftLimit: number

        constructor(holder: string, balance: number, overdrafLimit: number) {
            super(holder, balance)
            this.overdraftLimit = overdrafLimit
        }

        public getOverdraftLimit(): number {
            return this.overdraftLimit
        }
    }

    class savingAccount extends BankAccount {
        private interestRate: number

        constructor(holder: string, balance: number, interestRate:number) {
            super(holder, balance)
            this.interestRate = interestRate
        }

        public getInterestRate(): number {
            return this.interestRate
        }
    }

    const accountList: BankAccount[] = [
        new CheckingAccount('Vinnicius', 1000, 300),
        new savingAccount('José', 3000, 0.05),
        new CheckingAccount('Maria', 50, 300),
        new savingAccount('João', 2000, 0.10)
    ]

    function processAccounts(accounts: BankAccount[]): void {
        accounts.forEach((account) => {
            if(account instanceof CheckingAccount) {

                console.log('Processando conta corrente', account.getOverdraftLimit());
            } else if(account instanceof savingAccount) {
                console.log('Processando conta poupança', account.getInterestRate())
            }
        })
    }

    processAccounts(accountList)
    
}