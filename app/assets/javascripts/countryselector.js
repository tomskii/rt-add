(function($){
    $(function(){
      $('#countryselector').val('');
      $("#countries").submit(function( event ) {
        var selectValue = $('#countryselector').val();
        if (_.includes(['Hong Kong', 'Japan', 'Malaysia', 'Singapore',
              'Korea, Republic of', 'Taiwan', 'Brunei Darussalam', 'Israel', 'Canada', 'United States', 'Argentina',
              'Belize', 'Brazil', 'Chile', 'El Salvador', 'Guatemala', 'Honduras', 'Mexico',
              'Nicaragua', 'Panama', 'Paraguay', 'Uruguay', 'Australia', 'New Zealand'], selectValue)){
          window.location.href = 'why-are-you-coming.html';
          event.preventDefault();
        } else if (_.includes([''], selectValue)){
          $(".countryHint").addClass('red');
          $(".countryHinttext").show();
          event.preventDefault();
        } else {
          window.location.href = 'ineligible.html';
          event.preventDefault();
        }
      });
      $('select').selectToAutocomplete();
    });
  })(jQuery);

  (function($){
      $(function(){
        $('#countryselectorRenewals').val('');
        $("#countriesRenewals").submit(function( event ) {
          var selectValue = $('#countryselectorRenewals').val();
          if (_.includes(['Hong Kong', 'Japan', 'Malaysia', 'Singapore',
                'Korea, Republic of', 'Taiwan', 'Brunei Darussalam', 'Israel', 'Canada', 'United States', 'Argentina',
                'Belize', 'Brazil', 'Chile', 'El Salvador', 'Guatemala', 'Honduras', 'Mexico',
                'Nicaragua', 'Panama', 'Paraguay', 'Uruguay', 'Australia', 'New Zealand'], selectValue)){
            window.location.href = '/renewals-it3/passport-number.html';
            event.preventDefault();
          } else if (_.includes([''], selectValue)){
            $(".countryHint").addClass('red');
            $(".countryHinttext").show();
            event.preventDefault();
          } else {
            window.location.href = '/renewals-it3/ineligible.html';
            event.preventDefault();
          }
        });
        $('select').selectToAutocomplete();
      });
    })(jQuery);
