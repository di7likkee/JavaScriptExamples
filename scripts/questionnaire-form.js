$('input:checkbox').change(function () {
    let parentId = $(this).parent().parent().attr('id');
    checkCountCheckboxes($('#' + parentId + ' input:checkbox:checked').length, parentId);
});

function checkCountCheckboxes(countCheckboxes, selector) {
    if (countCheckboxes < 3) {
        clearDisabledCheckboxes($('#' + selector + ' input:checkbox'));
    } else {
        disableOtherCheckboxes($('#' + selector + ' input:checkbox:not(:checked)'));
    }
}
function clearAllDisabledCheckboxes() {
    $('input:checkbox').prop('disabled', false);
}

function disableOtherCheckboxes(arrayElements) {
    arrayElements.each(function () {
        $(this).prop('disabled', true);
    });
}

function clearDisabledCheckboxes(arrayElements) {
    arrayElements.each(function () {
        $(this).prop('disabled', false);
    });
}

function validationCheck(event) {
    let error = false;
    clearValidation();

    $('.question').each(function () {
        if ($('#' + (this).id + ' input:checked').length == 0) {
            $(this).find('span.question_title').addClass('value_not_selected');
            error = true;
        }
    });

    showError(error);
}

function clearValidation() {
    $('.question_title').removeClass('value_not_selected');
}

function showError(error) {
    if (error) {
        alert('Ответьте на все вопросы пожалуйста...');
        event.preventDefault();

        return false;
    } else {
        submitData();
    }
}

function submitData() {
    let result = '';

    $.each($('#questionnaire-form').serializeArray(), function (i, field) {
        switch (field.name) {
            case "marital_status":
                result += 'Вы: ';
                result += field.value + '. \n';
                break;
            case "count_people_living_with_you":
                result += 'Вы живёте в количестве: ';
                result += field.value + ' человек. \n';
                break;
            case "age_children":
                result += 'У вас есть дети: ';
                result += field.value + '. \n';
                break;
            case "what_you_did":
                result += 'Вы: ';
                result += field.value + '. \n';
                break;
            default:
                break;
        }
    });

    result += '\n Молодец!!!';

    alert(result);
}