        // Current date and time
        function updateDateTime() {
            const currentDate = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
            document.getElementById('current-date-time').textContent = formattedDate;
        }

        setInterval(updateDateTime, 1000);

        // Generate calendar day
        function generateCalendar() {
            const daysContainer = document.querySelector('.days');
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth();
            const daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();
            const firstDayOfMonth = new Date(currentDate.getFullYear(), currentMonth, 1).getDay();

            // Clear previous days on calendar
            daysContainer.innerHTML = '';

            // Add empty cells for the days before the first day of the month
            for (let i = 0; i < firstDayOfMonth; i++) {
                const emptyDay = document.createElement('li');
                daysContainer.appendChild(emptyDay);
            }

            // Add days of the month
            for (let day = 1; day <= daysInMonth; day++) {
                const calendarDay = document.createElement('li');
                calendarDay.textContent = day;

                // Highlight the current day
                if (day === currentDate.getDate() && currentMonth === currentDate.getMonth()) {
                    calendarDay.classList.add('active');
                }

                daysContainer.appendChild(calendarDay);
                }
            }

        // Call the function to generate calendar days
        generateCalendar();

        // Function to update the month and year in the calendar header
        function updateCalendarHeader(year, month) {
            const monthElement = document.querySelector('.month ul li:nth-child(3)');
            monthElement.innerHTML = `${getMonthName(month)}<br><span style="font-size:18px">${year}</span>`;
        }

        // Function to get the name of the month
        function getMonthName(month) {
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            return months[month];
        }

        // Function to handle the previous month button click
        function handlePrevMonth() {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            updateCalendar();
        }

        // Function to handle the next month button click
        function handleNextMonth() {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            updateCalendar();
        }

        // Function to update the calendar
        function updateCalendar() {
            generateCalendar(currentYear, currentMonth);
            updateCalendarHeader(currentYear, currentMonth);
        }

        // Attach event listeners to previous and next buttons
        document.querySelector('.month .prev').addEventListener('click', handlePrevMonth);
        document.querySelector('.month .next').addEventListener('click', handleNextMonth);

        // Initial values for the current month and year
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        // Initial generation of the calendar
        generateCalendar(currentYear, currentMonth);
        updateCalendarHeader(currentYear, currentMonth);

        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            const slides = document.getElementsByClassName("mySlides");

            if (n > slides.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = slides.length;
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slides[slideIndex - 1].style.display = "block";
        }