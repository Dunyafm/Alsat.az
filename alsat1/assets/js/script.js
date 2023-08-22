$(document).ready(function() {
    const adForm = $('#adForm');
    const adList = $('#adList');
  
    adForm.submit(function(event) {
      event.preventDefault();
  
      const formData = new FormData(adForm[0]);
  
      $.ajax({
        type: 'POST',
        url: '/api/addAd',
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
          // Обновляем список объявлений на странице elan.html
          refreshAdList();
          adForm[0].reset(); // Очищаем форму
        },
        error: function(error) {
          console.error('Error adding ad:', error);
        }
      });
    });
  
    function refreshAdList() {
      $.ajax({
        type: 'GET',
        url: '/api/getAds',
        success: function(data) {
          adList.empty();
          data.forEach(function(adData) {
            const adItem = $('<li>').text(adData.title + ' - ' + adData.price);
            adList.append(adItem);
          });
        },
        error: function(error) {
          console.error('Error fetching ads:', error);
        }
      });
    }
  
    refreshAdList(); // Загрузка списка объявлений при загрузке страницы
  });
  
  