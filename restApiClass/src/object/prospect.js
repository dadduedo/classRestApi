class Prospect {
  constructor(id, bankName, productName, fiscalCode, monthlyPayment, tan, taeg) {
    this.id = id;
    this.bankName = bankName;
    this.productName = productName;
    this.fiscalCode = fiscalCode;
    this.monthlyPayment = monthlyPayment;
    this.tan = tan;
    this.taeg = taeg;
  }
}

class IntesaSanpaoloProspect extends Prospect {
  constructor(id, bankName, productName, fiscalCode, monthlyPayment, tan, taeg, branchCode, dataReceived) {
    super(id, bankName, productName, fiscalCode, monthlyPayment, tan, taeg);
    this.branchCode = branchCode;
    this.dataReceived = dataReceived;
  }
}

class CreditAgricoleProspect extends Prospect {
  constructor(id, bankName, productName, fiscalCode, monthlyPayment, tan, taeg, branchCode, dataReceived) {
    super(id, bankName, productName, fiscalCode, monthlyPayment, tan, taeg);
    this.branchCode = branchCode;
    this.dataReceived = dataReceived;
  }
}

class BNLProspect extends Prospect {
  constructor(id, bankName, productName, fiscalCode, monthlyPayment, tan, taeg, email) {
    super(id, bankName, productName, fiscalCode, monthlyPayment, tan, taeg);
    this.email = email;
  }
}

module.exports = {
  Prospect,
  IntesaSanpaoloProspect,
  CreditAgricoleProspect,
  BNLProspect,
};
