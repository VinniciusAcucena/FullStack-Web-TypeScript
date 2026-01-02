export const bootstrap = () => {
    class BankAccount {
        holder;
        balance;
        constructor(holder, balance) {
            this.holder = holder;
            this.balance = balance;
        }
        getHolder() {
            return this.holder;
        }
    }
    class CheckingAccount extends BankAccount {
        overdraftLimit;
        constructor(holder, balance, overdrafLimit) {
            super(holder, balance);
            this.overdraftLimit = overdrafLimit;
        }
        getOverdraftLimit() {
            return this.overdraftLimit;
        }
    }
    class savingAccount extends BankAccount {
        interestRate;
        constructor(holder, balance, interestRate) {
            super(holder, balance);
            this.interestRate = interestRate;
        }
        getInterestRate() {
            return this.interestRate;
        }
    }
    const accountList = [
        new CheckingAccount('Vinnicius', 1000, 300),
        new savingAccount('José', 3000, 0.05),
        new CheckingAccount('Maria', 50, 300),
        new savingAccount('João', 2000, 0.10)
    ];
    function processAccounts(accounts) {
        accounts.forEach((account) => {
            if (account instanceof CheckingAccount) {
                console.log('Processando conta corrente', account.getOverdraftLimit());
            }
            else if (account instanceof savingAccount) {
                console.log('Processando conta poupança', account.getInterestRate());
            }
        });
    }
    processAccounts(accountList);
};
