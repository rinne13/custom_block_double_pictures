<?php
/**
 * Рендерит блок на фронтенде.
 */

$attributes = $block->attributes;
$left_image = isset($attributes['leftImage']) ? esc_url($attributes['leftImage']) : '';
$right_image = isset($attributes['rightImage']) ? esc_url($attributes['rightImage']) : '';
$background_color = isset($attributes['backgroundColor']) ? esc_attr($attributes['backgroundColor']) : 'transparent';
?>

<div class="double-picture-block" style="background-color: <?php echo $background_color; ?>;">
    <div class="image-container">
        <?php if ( ! empty( $left_image ) ) : ?>
            <img src="<?php echo $left_image; ?>" alt="<?php esc_attr_e( 'Left Image', 'double-picture-block' ); ?>" class="left-image" />
        <?php else : ?>
            <div class="left-image-placeholder">
                <span><?php esc_html_e( 'Left Image', 'double-picture-block' ); ?></span>
            </div>
        <?php endif; ?>

        <?php if ( ! empty( $right_image ) ) : ?>
            <img src="<?php echo $right_image; ?>" alt="<?php esc_attr_e( 'Right Image', 'double-picture-block' ); ?>" class="right-image" />
        <?php else : ?>
            <div class="right-image-placeholder">
                <span><?php esc_html_e( 'Right Image', 'double-picture-block' ); ?></span>
            </div>
        <?php endif; ?>
    </div>
</div>
