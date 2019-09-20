console.log('Add validation!');


// if (no text)
//     should say something about it being invalid
//     and prevent the default response of it being valid

// function markInvalid(field, error) {
//     const formContainer = field.parentNode
//     field.parentNode.classList.remove('input-valid')
//     field.parentNode.classList.add('input-invalid')




// field vs. nameTextField

// if (error) {
//     const errorMsg = document.createElement('p')
//     errorMsg.classList.add('input-hint', 'text-danger', 'error message')

// line 21?



// function markValid(field) {
//     field.parentNode.classList.remove('input-invalid')
//     field.parentNode.classList.add('input-valid')




function main() {

    let parkingForm = document.querySelector('#parking-form')
    console.log({ parkingForm })
    parkingForm.addEventListener('submit', function(event) {
        event.preventDefault()
            // let formFieldText = document.querySelector('#parking-form')
            // let fieldText = nameTextField.value


        // function name() {


        let nameTextField = document.querySelector('#name-field')
        let nameInput = document.querySelector('#name')

        let nameText = nameInput.value
        console.log({ nameText })


        if (!nameText) {
            nameTextField.classList.remove('input-valid')
            nameTextField.classList.add('input-invalid')
        } else {
            nameTextField.classList.remove('input-invalid')
            nameTextField.classList.add('input-valid')
                // }
        }


        // function days() {
        let daysTextField = document.querySelector('#days-field')
        let daysInput = document.querySelector('#days')

        let daysText = daysInput.value
        console.log({ daysText })
        console.log(typeof daysText)


        if (!isNaN(daysText) && (daysText < 1 || daysText > 30) || isNaN(daysText)) {
            daysTextField.classList.remove('input-valid')
            daysTextField.classList.add('input-invalid')
        } else {
            daysTextField.classList.remove('input-invalid')
            daysTextField.classList.add('input-valid')
        }
        // }

        // function date() {
        let dateTextField = document.querySelector('#start-date-field')
        let dateInput = document.querySelector('#start-date')

        let dateText = dateInput.value
        console.log({ dateText })


        if (!dateText) {
            dateTextField.classList.remove('input-valid')
            dateTextField.classList.add('input-invalid')
        } else {
            dateTextField.classList.remove('input-invalid')
            dateTextField.classList.add('input-valid')
        }
        // }

        let cvvTextField = document.querySelector('#cvv-field')
        let cvvInput = document.querySelector('#cvv')

        let cvvText = cvvInput.value
        console.log({ cvvText })

        if (!cvvText) {
            cvvTextField.classList.remove('input-valid')
            cvvTextField.classList.add('input-invalid')
        } else {
            cvvTextField.classList.remove('input-invalid')
            cvvTextField.classList.add('input-valid')
        }


        let ccTextField = document.querySelector('#credit-card-field')
        let ccInput = document.querySelector('#credit-card')

        let ccText = ccInput.value
        console.log({ ccText })

        if (!ccText) {
            ccTextField.classList.remove('input-valid')
            ccTextField.classList.add('input-invalid')
        } else {
            ccTextField.classList.remove('input-invalid')
            ccTextField.classList.add('input-valid')
        }

        let expTextField = document.querySelector('#expiration-field')
        let expInput = document.querySelector('#expiration')

        let expText = expInput.value
        console.log({ expText })

        if (!expText) {
            expTextField.classList.remove('input-valid')
            expTextField.classList.add('input-invalid')
        } else {
            expTextField.classList.remove('input-invalid')
            expTextField.classList.add('input-valid')
        }


    })
}
main()