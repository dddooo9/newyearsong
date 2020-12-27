$(document).ready(function () {
    $('.clipboardBtn').on('click', function(e) { 
        
        var text = 'https://dddooo9.github.io';
        $('#clip_target').val(text);
        $('#clip_target').select();
        // Use try & catch for unsupported browser 
        try { 
            // The important part (copy selected text) 
            var successful = document.execCommand('copy');
            // if(successful) answer.innerHTML = 'Copied!'; 
            // else answer.innerHTML = 'Unable to copy!';
        } catch (err) { alert('이 브라우저는 지원하지 않습니다.') }

    });
});
