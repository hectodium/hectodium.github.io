const table = `
<table class="android-foss-table">
	<tr>
		<th></th>
		<th>Google Calculator</th>
		<th>AOSP Calculator</th>
		<th>GrapheneOS Calculator</th>
		<th>LineageOS Calculator</th>
		<th>ArityCalc</th>
		<th>CalculatorYOU</th>
		<th>CuteCalc</th>
		<th>Fossifiy Calculator</th>
		<th>NumberHub</th>
		<th>OpenCalc</th>
		<th>yetCalc</th>
	</tr>
	<tr>
		<td>Based on</td>
		<td>AOSP Calculator</td>
		<td>-</td>
		<td>AOSP Calculator</td>
		<td>AOSP Calculator</td>
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td class="title-row">General</td>
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>License</td>
		<td class="red">Closed-source</td>
		<td class="lgreen">Apache-2.0</td>
		<td class="lgreen">Apache-2.0</td>
		<td class="lgreen">Apache-2.0</td>
		<td class="lgreen">Apache-2.0</td>
		<td class="green">GPL-3.0 only</td>
		<td class="green">GPL-3.0 or later</td>
		<td class="green">GPL-3.0 only</td>
		<td class="green">GPL-3.0 only</td>
		<td class="green">GPL-3.0 only</td>
		<td class="lgreen">BSD-3-Clause</td>
	</tr>
	<tr>
		<td>Import/export settings</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Reproducible build</td>
		<td class="red">No</td>
		<td></td><td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Binary assets</td>
		<td class="red">Yes</td>
		<td></td><td></td><td></td><td></td>
		<td class="green">No</td>
		<td class="green">No</td>
		<td class="green">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Code license of binary assets</td>
		<td class="red">Closed-source</td>
		<td></td><td></td><td></td><td></td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Connects to web service</td>
		<td class="red">No</td>
		<td></td><td></td><td></td><td></td>
		<td class="green">No</td>
		<td class="green">No</td>
		<td class="green">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Code license of web service</td>
		<td class="red">Closed-source</td>
		<td></td><td></td><td></td><td></td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Self-host web service</td>
		<td class="red">No</td>
		<td></td><td></td><td></td><td></td>
		<td>-</td>
		<td>-</td>
		<td>-</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Can be used strictly offline</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td class="title-row">Design</td>
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Material design</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="red">No</td>
		<td class="green">Yes</td>
		<td class="lgreen">Yes, non-standard</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Dynamic colors</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="red">No</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Manual light/dark theme</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="red">No</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Automatic light/dark theme</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="red">No</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>AMOLED theme</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
		<td class="lgreen">Yes, only</td>
		<td class="red">No</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td class="title-row">Features</td>
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>%</td>
		<td></td><td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Parenthesis</td>
		<td></td><td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>History</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Unit converter</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
		<td class="red">No</td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Formatting customization </td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
		<td class="red">No</td>
		<td class="green">Yes</td>
		<td class="lgreen">Yes, limited</td>
		<td class="lgreen">By changing app language</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Permissions</td>
		<td class="yellow">Internet</td>
		<td></td><td></td><td></td><td></td>
		<td class="green">None</td>
		<td class="green">None</td>
		<td class="green">None</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Haptic feedback</td>
		<td class="green">On press down</td>
		<td></td><td></td><td></td>
		<td class="red">No</td>
		<td class="yellow">On press up</td>
		<td class="yellow">On press up</td>
		<td class="yellow">On press up</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Haptics on/off</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
		<td class="red">No</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Currency rates</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
		<td class="lred">No</td>
		<td class="lred">No</td>
		<td class="lred">No</td>
		<td class="lred">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Landscape mode</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="yellow">Yes, limited</td>
		<td class="green">Yes</td>
		<td class="yellow">Yes, unfinished</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Programmer mode</td>
		<td class="red">No</td>
		<td></td><td></td><td></td><td></td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td class="title-row">Scientific operations</td>
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>On portrait mode</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="lgreen">Yes, only</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>sin, cos, tan</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="lgreen">Yes, text-based</td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>arcsin, arccos, arctan</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="lgreen">Yes, text-based</td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>sinh, cosh, tanh</td>
		<td></td><td></td><td></td><td></td>
		<td class="lgreen">Yes, text-based</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>asinh, acosh, atanh</td>
		<td></td><td></td><td></td><td></td>
		<td class="lgreen">Yes, text-based</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>log, ln</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="lgreen">Yes, text-based</td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Custom base logarithm</td>
		<td></td><td></td><td></td><td></td>
		<td class="lgreen">Yes, text-based</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>sqrt</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="lgreen">Yes, text-based</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>cube root</td>
		<td></td><td></td><td></td><td></td>
		<td class="lgreen">Yes, text-based</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>pi</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="lgreen">Yes, text-based</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>e</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>e^x</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>x^y</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>x^2 shortcut</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="lred">No</td>
		<td class="lred">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>10^x shortcut</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="lred">No</td>
		<td class="lred">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>!</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>deg/rad switch</td>
		<td class="green">Yes</td>
		<td></td><td></td><td></td>
		<td class="lgreen">Yes, text-based</td>
		<td class="lgreen">When pressing sin/cos/tan</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Absolute value</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
		<td class="lgreen">Yes, text-based</td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>Complex numbers</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td class="title-row">Graphing</td>
		<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
	</tr>
	<tr>
		<td>2D</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
	<tr>
		<td>3D</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
		<td class="green">Yes</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td class="red">No</td>
		<td></td><td></td><td></td>
	</tr>
</table>
`;
