class GradientBorderWorklet {
    static get inputProperties() {
        return ['--gradient-color-1', '--gradient-color-2', '--gradient-color-3', '--animation-duration'];
    }

    paint(ctx, geom, properties) {
        const colorOne = properties.get('--gradient-color-1').toString();
        const colorTwo = properties.get('--gradient-color-2').toString();
        const colorThree = properties.get('--gradient-color-3').toString();
        const animationDuration = parseInt(properties.get('--animation-duration').toString());

        const time = performance.now() % animationDuration;
        const progress = time / animationDuration;

        const gradient = ctx.createLinearGradient(0, 0, geom.width, geom.height);
        gradient.addColorStop(0, colorOne);
        gradient.addColorStop(0.5, colorTwo);
        gradient.addColorStop(1, colorThree);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(progress * geom.width, 0);
        ctx.lineTo(geom.width, 0);
        ctx.lineTo(geom.width, geom.height);
        ctx.lineTo(0, geom.height);
        ctx.lineTo(0, 0);
        ctx.lineTo(progress * geom.width, 0);
        ctx.stroke();
    }
}

registerPaint('gradient-border', GradientBorderWorklet);