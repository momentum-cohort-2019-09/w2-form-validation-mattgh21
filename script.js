console.log('Add validation!');


function markInvalid(field, error) {
    // const formContainer = field.parentNode
    field.classList.add('input-invalid')
    field.classList.remove('input-valid')


    if (error) {
        const errorMsg = document.createElement('p')
        errorMsg.classList.add('input-hint', 'text-danger', 'error-message')
        errorMsg.innerText = error
        field.appendChild(errorMsg)
    }
}
// line 21?

function markValid(field) {
    field.classList.remove('input-invalid')
    field.classList.add('input-valid')
}

function removeErrorMsgs(field) {
    for (let msg of document.querySelectorAll('.error-message'))
        msg.remove()
}

function isDateInFuture(date) {
    let today = Date.now()
    if (date > today) {
        return true
    } else {
        return false
    }
}



function main() {

    let parkingForm = document.querySelector('#parking-form')
    console.log({ parkingForm })
    parkingForm.addEventListener('submit', function(event) {
        event.preventDefault()

        removeErrorMsgs()

        let nameTextField = document.querySelector('#name-field')
        let nameInput = document.querySelector('#name')

        let nameText = nameInput.value
        console.log({ nameText })


        if (!nameText) {
            markInvalid(nameTextField, 'Name is required')
        } else {
            markValid(nameTextField)
        }



        let daysTextField = document.querySelector('#days-field')
        let daysInput = document.querySelector('#days')

        let daysText = daysInput.value
        console.log({ daysText })
        console.log(typeof daysText)


        if (!isNaN(daysText) && (daysText < 1 || daysText > 30) || isNaN(daysText)) {
            markInvalid(daysTextField, 'Number of days is required, and must be between 1-30 days')
        } else {
            markValid(daysTextField)
        }



        let dateTextField = document.querySelector('#start-date-field')
        let dateInput = document.querySelector('#start-date')
        let date = new Date(dateInput.value)

        console.log(date)

        let dateText = dateInput.value
        console.log({ dateText })


        if (!dateText || !isDateInFuture(date)) {
            markInvalid(dateTextField, 'Date is required, and must be in the future')
        } else {
            markValid(dateTextField)
        }


        let cvvTextField = document.querySelector('#cvv-field')
        let cvvInput = document.querySelector('#cvv')

        let cvvText = cvvInput.value
        console.log({ cvvText })

        if (isNaN(cvvText) || cvvText.length !== 3 || cvvText.includes(".")) {
            markInvalid(cvvTextField, 'CVV is required, and must be 3 numbers')
        } else {
            markValid(cvvTextField)
        }


        let ccTextField = document.querySelector('#credit-card-field')
        let ccInput = document.querySelector('#credit-card')

        let ccText = ccInput.value
        console.log({ ccText })

        if (!ccText) {
            markInvalid(ccTextField, 'Credit Car is required')
        } else {
            markValid(ccTextField)
        }

        let expTextField = document.querySelector('#expiration-field')
        let expInput = document.querySelector('#expiration')
        let expText = expInput.value
        console.log({ expText })

        let expDate = new Date(expInput.value)

        if (!expText || !isDateInFuture(expDate)) {
            markInvalid(expTextField, 'Expiration date is required')
        } else {
            markValid(expTextField)
        }


        let carTextField = document.querySelector('#car-field')
        let carYearInput = document.querySelector('#car-year')
        let carMakeInput = document.querySelector('#car-make')
        let carModelInput = document.querySelector('#car-model')

        let carYearText = carYearInput.value
        let carMakeText = carMakeInput.value
        let carModelText = carModelInput.value
        console.log({ expText })

        if ((!isNaN(carYearText) && (carYearText < 1900 || carYearText > 2019) || isNaN(carYearText)) || !carMakeText || !carModelText) {
            markInvalid(carTextField, 'Car year is required. Car make is required. Car model is required.')
        } else {
            markValid(carTextField)
        }

    })
}
main()