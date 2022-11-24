<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src="https://www.jogado.hu/wp-content/uploads/2022/05/shutterstock_746527606-900x604-1.jpeg" class="logo" alt="Laravel Logo">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
