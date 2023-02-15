// Toan tu '?.'

let user = {}; // a user without "address" property

// console.log('v1', user.address ? user.address.street : undefined); // Error!
// console.log('v2', user.address && user.address.street)
// console.log('v3', user?.address?.street ?? 'not found user')


let userAdmin = {
  admin() {
    alert("I am Tester");
  }
};

let userGuest = { };
// userAdmin.admin();
userGuest?.admin?.();

// Summary
// Thao tac ojbect

// obj ?. a  ?. b ?? defaultValue
// obj ?. a  ?. b  => undefined

// Thao tac
// ojb.func?.();

let obj = {
  name: 'quy',
  address: {
    street: 'abc'
  }
}

console.log(obj?.address?.xyz?.def ?? 'not found')