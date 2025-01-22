$(document).ready(function () {
  // Initialize datetime pickers
  $('.datetimepicker').datetimepicker({
      format: 'MM/DD/YYYY',
  });

  // Calculate button click event
  $('#calculate').click(function () {
      // Get the selected dates
      let fromDate = $('#fromDate').data("DateTimePicker").date();
      let toDate = $('#toDate').data("DateTimePicker").date();

      if (!fromDate || !toDate) {
          alert('Please select both dates.');
          return;
      }

      // Format the dates for display
      let startDate = fromDate.format('MM/DD/YYYY');
      let endDate = toDate.format('MM/DD/YYYY');

      // Calculate date intervals
      let years = toDate.diff(fromDate, 'years');
      let months = toDate.diff(fromDate, 'months');
      let weeks = toDate.diff(fromDate, 'weeks');
      let days = toDate.diff(fromDate, 'days');

      // Display the results
      $('#startDate').text(startDate);
      $('#endDate').text(endDate);
      $('#years').text(years);
      $('#months').text(months);
      $('#weeks').text(weeks);
      $('#days').text(days);
      $('#result').show();
  });
});
