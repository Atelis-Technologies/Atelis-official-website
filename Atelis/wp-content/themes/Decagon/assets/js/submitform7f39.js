jQuery(document).ready(function ($) {
  var first = document.querySelector('.first-input');

  if (first) {
    first.addEventListener('change', function (e) {
      mixpanel.track('Started filling form', e.target.value);
    });
  }

  var last = document.querySelector('.last-input');

  if (last) {
    last.addEventListener('change', function (e) {
      mixpanel.track('Done filling form', e.target.value);
    });
  }

  $('#submit-form').click(function (e) {
    e.preventDefault();

    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var email = $('#email').val();
    var organization_name = $('#organization_name').val();
    var industry_type = $('#industry_type').val();
    var role = $('#role').val();
    var phone = $('#phone').val();
    var stack = $('#stack').val();
    var engineers_number = $('#engineers_number').val();
    var when_are_the_engineers_expected_to_resume_ = $(
      '#when_are_the_engineers_expected_to_resume_'
    ).val();
    var how_many_employees_does_your_organization_have_ = $(
      '#how_many_employees_does_your_organization_have_'
    ).val();
    var num_of_developers = $('#num_of_developers').val();
    var where_is_your_location_ = $('#where_is_your_location_').val();
    var engineers_base = $('#engineers_base').val();
    var hear_about_us = $('#hear_about_us').val();
    var qa = HUBSPOT.mixpanelDistinctId;

    if (
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      phone === '' ||
      stack === '' ||
      engineers_number === '' ||
      where_is_your_location_ === ''
    ) {
      $('.submit-error').show();
    }

    var formData = {
      submittedAt: Date.now(),
      fields: [
        {
          name: 'firstname',
          value: firstname,
        },
        {
          name: 'lastname',
          value: lastname,
        },
        {
          name: 'email',
          value: email,
        },
        {
          name: 'organization_name',
          value: organization_name,
        },
        {
          name: 'industry_type',
          value: industry_type,
        },
        {
          name: 'role',
          value: role,
        },
        {
          name: 'phone',
          value: phone,
        },
        {
          name: 'stack',
          value: stack,
        },
        {
          name: 'engineers_number',
          value: engineers_number,
        },
        {
          name: 'when_are_the_engineers_expected_to_resume_',
          value: when_are_the_engineers_expected_to_resume_,
        },
        {
          name: 'how_many_employees_does_your_organization_have_',
          value: how_many_employees_does_your_organization_have_,
        },
        {
          name: 'num_of_developers',
          value: num_of_developers,
        },
        {
          name: 'where_is_your_location_',
          value: where_is_your_location_,
        },
        {
          name: 'engineers_base',
          value: engineers_base,
        },
        {
          name: 'hear_about_us',
          value: hear_about_us,
        },
        {
          name: 'qa',
          value: qa,
        },
      ],
    };

    var jsonFormData = JSON.stringify(formData);

    $.ajax({
      type: 'POST',
      url:
        'https://api.hsforms.com/submissions/v3/integration/submit/' +
        HUBSPOT.portalId +
        '/' +
        HUBSPOT.requestCallFormId,
      data: jsonFormData,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: (response) => {
        $('#request-call-form')[0].reset();
        window.location.assign('/thank-you');
      },
      error: (response) => {
        alert(response.responseJSON.errors[0].message);
      },
    });
  });

  $('#submit-eng-form').click(function (e) {
    e.preventDefault();

    var company = $('#company').val();
    var address = $('#address').val();
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var industry_type = $('#industry_type').val();
    var role = $('#role').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var programming_language = $('#programming_language').val();
    var stack = $('#stack').val();
    var engineers_number = $('#engineers_number').val();
    var hear_about_us = $('#hear_about_us').val();
    var qa = HUBSPOT.mixpanelDistinctId;

    if (
      company === '' ||
      address === '' ||
      firstname === '' ||
      lastname === '' ||
      email === '' ||
      phone === '' ||
      programming_language === '' ||
      stack === '' ||
      engineers_number === ''
    ) {
      $('.submit-error').show();
    }

    var formData = {
      submittedAt: Date.now(),
      fields: [
        {
          name: 'company',
          value: company,
        },
        {
          name: 'address',
          value: address,
        },
        {
          name: 'firstname',
          value: firstname,
        },
        {
          name: 'lastname',
          value: lastname,
        },
        {
          name: 'industry_type',
          value: industry_type,
        },
        {
          name: 'role',
          value: role,
        },
        {
          name: 'email',
          value: email,
        },
        {
          name: 'phone',
          value: phone,
        },
        {
          name: 'programming_language',
          value: programming_language,
        },
        {
          name: 'stack',
          value: stack,
        },
        {
          name: 'engineers_number',
          value: engineers_number,
        },
        {
          name: 'hear_about_us',
          value: hear_about_us,
        },
        {
          name: 'qa',
          value: qa,
        },
        {
          name: 'organization_name',
          value: 'N/A',
        },
        {
          name: 'resumption_date',
          value: 'N/A',
        },
      ],
    };

    var jsonFormData = JSON.stringify(formData);

    $.ajax({
      type: 'POST',
      url:
        'https://api.hsforms.com/submissions/v3/integration/submit/' +
        HUBSPOT.portalId +
        '/' +
        HUBSPOT.engineerFormId,
      data: jsonFormData,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: (response) => {
        $('#engineer-form')[0].reset();
        window.location.assign('/thank-you');
      },
      error: (response) => {
        alert(response.responseJSON.errors[0].message);
      },
    });
  });

  $('#submit-hireadev-form').click(function (e) {
    e.preventDefault();

    var email = $('#email').val();
    var phone = $('#phone').val();
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var company = $('#company').val();
    var jobtitle = $('#jobtitle').val();
    var employee_number = $('#employee_number').val();
    var where_is_your_location_ = $('#where_is_your_location_').val();
    var message = $('#message').val();
    var qa = HUBSPOT.mixpanelDistinctId;

    if (
      email === '' ||
      phone === '' ||
      firstname === '' ||
      lastname === '' ||
      company === '' ||
      jobtitle === '' ||
      employee_number === '' ||
      where_is_your_location_ === ''
    ) {
      $('.submit-error').show();
    }

    var formData = {
      submittedAt: Date.now(),
      fields: [
        {
          name: 'email',
          value: email,
        },
        {
          name: 'phone',
          value: phone,
        },
        {
          name: 'firstname',
          value: firstname,
        },
        {
          name: 'lastname',
          value: lastname,
        },
        {
          name: 'company',
          value: company,
        },
        {
          name: 'jobtitle',
          value: jobtitle,
        },
        {
          name: 'employee_number',
          value: employee_number,
        },
        {
          name: 'where_is_your_location_',
          value: where_is_your_location_,
        },
        {
          name: 'message',
          value: message,
        },
        {
          name: 'qa',
          value: qa,
        },
      ],
    };

    var jsonFormData = JSON.stringify(formData);

    $.ajax({
      type: 'POST',
      url:
        'https://api.hsforms.com/submissions/v3/integration/submit/' +
        HUBSPOT.portalId +
        '/' +
        HUBSPOT.hireadevFormId,
      data: jsonFormData,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: (response) => {
        $('#hireadev-form')[0].reset();
        window.location.assign('/thank-you');
      },
      error: (response) => {
        alert(response.responseJSON.errors[0].message);
      },
    });
  });
});
